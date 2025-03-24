import type { Meta, StoryObj } from "@storybook/react";
import Welcome_catsWelcomeCats from "../Welcome_catsWelcomeCats";

const meta: Meta<typeof Welcome_catsWelcomeCats> = { title: "unDraw/Welcome_catsWelcomeCats", component: Welcome_catsWelcomeCats };

export default meta;
type Story = StoryObj<typeof Welcome_catsWelcomeCats>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
