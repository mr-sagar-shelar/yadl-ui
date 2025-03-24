import type { Meta, StoryObj } from "@storybook/react";
import Themeisle39 from "../Themeisle39";

const meta: Meta<typeof Themeisle39> = { title: "Themeisle/Themeisle39", component: Themeisle39 };

export default meta;
type Story = StoryObj<typeof Themeisle39>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
