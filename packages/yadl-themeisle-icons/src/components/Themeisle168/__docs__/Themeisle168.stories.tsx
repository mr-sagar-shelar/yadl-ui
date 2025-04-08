import type { Meta, StoryObj } from "@storybook/react";
import Themeisle168 from "../Themeisle168";

const meta: Meta<typeof Themeisle168> = { title: "Themeisle/Themeisle168", component: Themeisle168 };

export default meta;
type Story = StoryObj<typeof Themeisle168>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
