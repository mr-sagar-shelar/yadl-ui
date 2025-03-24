import type { Meta, StoryObj } from "@storybook/react";
import Themeisle154 from "../Themeisle154";

const meta: Meta<typeof Themeisle154> = { title: "Themeisle/Themeisle154", component: Themeisle154 };

export default meta;
type Story = StoryObj<typeof Themeisle154>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
