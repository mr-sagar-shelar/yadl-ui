import type { Meta, StoryObj } from "@storybook/react";
import Themeisle440 from "../Themeisle440";

const meta: Meta<typeof Themeisle440> = { title: "Themeisle/Themeisle440", component: Themeisle440 };

export default meta;
type Story = StoryObj<typeof Themeisle440>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
