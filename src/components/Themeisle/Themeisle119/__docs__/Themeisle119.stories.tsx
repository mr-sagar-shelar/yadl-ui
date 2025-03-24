import type { Meta, StoryObj } from "@storybook/react";
import Themeisle119 from "../Themeisle119";

const meta: Meta<typeof Themeisle119> = { title: "Themeisle/Themeisle119", component: Themeisle119 };

export default meta;
type Story = StoryObj<typeof Themeisle119>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
