import type { Meta, StoryObj } from "@storybook/react";
import Themeisle314 from "../Themeisle314";

const meta: Meta<typeof Themeisle314> = { title: "Themeisle/Themeisle314", component: Themeisle314 };

export default meta;
type Story = StoryObj<typeof Themeisle314>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
