import { act } from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const originalClipboard = Object.getOwnPropertyDescriptor(
  navigator,
  "clipboard",
);
let writeText;

beforeEach(() => {
  window.localStorage.clear();
  delete document.documentElement.dataset.theme;
  writeText = jest.fn();
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value: { writeText },
  });
});

afterAll(() => {
  if (originalClipboard) {
    Object.defineProperty(navigator, "clipboard", originalClipboard);
  } else {
    delete navigator.clipboard;
  }
});

test("uses the fixed light appearance despite a previously saved Outie selection", () => {
  window.localStorage.setItem("afolabi-appearance", "outie");
  document.documentElement.dataset.theme = "outie";
  render(<App />);

  expect(screen.queryByRole("button", { name: "Innie" })).not.toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Outie" })).not.toBeInTheDocument();
  expect(screen.queryByRole("group", { name: "Appearance" })).not.toBeInTheDocument();
  expect(document.documentElement).not.toHaveAttribute("data-theme");
});

test.each([
  [
    "Stockball",
    "https://footystocks.com",
    /A live virtual stock market for Premier League players/,
    /Six synthetic-trader strategies react/,
  ],
  [
    "Access360",
    "https://github.com/fola60/access360",
    /An accessibility-first indoor navigation app/,
    /An AI assistant plans routes/,
  ],
  [
    "Game Engine RS",
    "https://github.com/fola60/game-engine-rs",
    /Built a lightweight Rust game engine on wgpu/,
    /Designed reusable APIs for the game loop/,
  ],
])(
  "%s links to its real project and displays its CV achievements",
  (title, url, description, detail) => {
    render(<App />);
    const projectLink = screen.getByRole("link", { name: new RegExp(title) });
    const project = within(projectLink.closest("article"));

    expect(projectLink).toHaveAttribute("href", url);
    expect(projectLink).toHaveAttribute("target", "_blank");
    expect(project.getByText(description, { selector: "li" })).toBeVisible();
    expect(project.getByText(detail, { selector: "li" })).toBeVisible();
  },
);

test("the workstation index links to the three portfolio sections", () => {
  render(<App />);
  const index = within(screen.getByRole("navigation", { name: "Portfolio index" }));
  expect(index.getAllByRole("link")).toHaveLength(3);

  [
    [/Projects/, "work"],
    [/Experience/, "about"],
    [/Contact/, "contact"],
  ].forEach(([name, sectionId]) => {
    expect(index.getByRole("link", { name })).toHaveAttribute("href", `#${sectionId}`);
    expect(document.getElementById(sectionId)).toBeInTheDocument();
  });
});

test("shows CV experience achievements and education", () => {
  render(<App />);
  const background = within(screen.getByRole("region", { name: "Experience & education" }));

  expect(background.getByText(/Built an AI-assisted internal tool/, { selector: "li" })).toBeVisible();
  expect(background.getByText(/Extended the campaign renderer/, { selector: "li" })).toBeVisible();
  expect(background.getByText(/3rd place worldwide in the Accessibility track/, { selector: "li" })).toBeVisible();
  expect(background.getByRole("heading", { name: /Technological University Dublin/ })).toBeVisible();
  expect(background.getByText("BSc Computer Science (Infrastructure)")).toBeVisible();
});

test("copies the contact email and announces success", async () => {
  writeText.mockResolvedValue(undefined);
  render(<App />);

  await act(async () =>
    userEvent.click(screen.getByRole("button", { name: "Copy email address" })),
  );

  expect(writeText).toHaveBeenCalledWith("afolabiadekanle@gmail.com");
  expect(await screen.findByText("Email copied")).toHaveAttribute(
    "role",
    "status",
  );
  expect(
    screen.getByRole("link", { name: "afolabiadekanle@gmail.com" }),
  ).toHaveAttribute("href", "mailto:afolabiadekanle@gmail.com");
});

test("offers a manual copy fallback when clipboard permission is denied", async () => {
  writeText.mockRejectedValue(new Error("Clipboard access denied"));
  render(<App />);

  await act(async () =>
    userEvent.click(screen.getByRole("button", { name: "Copy email address" })),
  );

  expect(
    await screen.findByText("Please select and copy the email address."),
  ).toHaveAttribute("role", "status");
  expect(screen.queryByText("Email copied")).not.toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "afolabiadekanle@gmail.com" }),
  ).toBeVisible();
});

test("both CV links download the updated named PDF", () => {
  render(<App />);
  const resumeLinks = screen.getAllByRole("link", { name: /download CV/i });

  expect(resumeLinks).toHaveLength(2);
  resumeLinks.forEach((resume) => {
    expect(resume).toHaveAttribute(
      "href",
      `${process.env.PUBLIC_URL}/afolabi-adekanle-cv.pdf`,
    );
    expect(resume).toHaveAttribute("download", "Afolabi-Adekanle-CV.pdf");
  });
});
