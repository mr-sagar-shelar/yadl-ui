import type { Meta, StoryObj } from "@storybook/react";
import Themeisle235 from "../Themeisle235";

const meta: Meta<typeof Themeisle235> = { title: "Themeisle/Themeisle235", component: Themeisle235 };

export default meta;
type Story = StoryObj<typeof Themeisle235>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
