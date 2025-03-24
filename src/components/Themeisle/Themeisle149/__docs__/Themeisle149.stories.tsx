import type { Meta, StoryObj } from "@storybook/react";
import Themeisle149 from "../Themeisle149";

const meta: Meta<typeof Themeisle149> = { title: "Themeisle/Themeisle149", component: Themeisle149 };

export default meta;
type Story = StoryObj<typeof Themeisle149>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
