import type { Meta, StoryObj } from "@storybook/react";
import LandingPage from "../LandingPage";

const meta: Meta<typeof LandingPage> = { title: "unDraw/LandingPage", component: LandingPage };

export default meta;
type Story = StoryObj<typeof LandingPage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
