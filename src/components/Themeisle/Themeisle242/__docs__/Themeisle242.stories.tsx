import type { Meta, StoryObj } from "@storybook/react";
import Themeisle242 from "../Themeisle242";

const meta: Meta<typeof Themeisle242> = { title: "Themeisle/Themeisle242", component: Themeisle242 };

export default meta;
type Story = StoryObj<typeof Themeisle242>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
