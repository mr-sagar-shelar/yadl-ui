import type { Meta, StoryObj } from "@storybook/react";
import Themeisle111 from "../Themeisle111";

const meta: Meta<typeof Themeisle111> = { title: "Themeisle/Themeisle111", component: Themeisle111 };

export default meta;
type Story = StoryObj<typeof Themeisle111>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
