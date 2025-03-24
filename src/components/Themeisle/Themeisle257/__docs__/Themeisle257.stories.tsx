import type { Meta, StoryObj } from "@storybook/react";
import Themeisle257 from "../Themeisle257";

const meta: Meta<typeof Themeisle257> = { title: "Themeisle/Themeisle257", component: Themeisle257 };

export default meta;
type Story = StoryObj<typeof Themeisle257>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
