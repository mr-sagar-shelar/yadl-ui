import type { Meta, StoryObj } from "@storybook/react";
import Themeisle16 from "../Themeisle16";

const meta: Meta<typeof Themeisle16> = { title: "Themeisle/Themeisle16", component: Themeisle16 };

export default meta;
type Story = StoryObj<typeof Themeisle16>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
