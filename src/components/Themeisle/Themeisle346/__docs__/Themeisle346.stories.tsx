import type { Meta, StoryObj } from "@storybook/react";
import Themeisle346 from "../Themeisle346";

const meta: Meta<typeof Themeisle346> = { title: "Themeisle/Themeisle346", component: Themeisle346 };

export default meta;
type Story = StoryObj<typeof Themeisle346>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
