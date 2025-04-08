import type { Meta, StoryObj } from "@storybook/react";
import Themeisle199 from "../Themeisle199";

const meta: Meta<typeof Themeisle199> = { title: "Themeisle/Themeisle199", component: Themeisle199 };

export default meta;
type Story = StoryObj<typeof Themeisle199>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
