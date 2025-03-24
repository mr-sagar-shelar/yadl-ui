import type { Meta, StoryObj } from "@storybook/react";
import Themeisle244 from "../Themeisle244";

const meta: Meta<typeof Themeisle244> = { title: "Themeisle/Themeisle244", component: Themeisle244 };

export default meta;
type Story = StoryObj<typeof Themeisle244>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
