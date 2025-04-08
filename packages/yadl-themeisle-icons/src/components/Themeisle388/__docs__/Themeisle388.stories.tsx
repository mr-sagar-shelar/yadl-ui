import type { Meta, StoryObj } from "@storybook/react";
import Themeisle388 from "../Themeisle388";

const meta: Meta<typeof Themeisle388> = { title: "Themeisle/Themeisle388", component: Themeisle388 };

export default meta;
type Story = StoryObj<typeof Themeisle388>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
