import type { Meta, StoryObj } from "@storybook/react";
import AboutUsPage from "../AboutUsPage";

const meta: Meta<typeof AboutUsPage> = { title: "unDraw/AboutUsPage", component: AboutUsPage };

export default meta;
type Story = StoryObj<typeof AboutUsPage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
