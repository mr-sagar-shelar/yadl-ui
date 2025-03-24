import type { Meta, StoryObj } from "@storybook/react";
import Themeisle309 from "../Themeisle309";

const meta: Meta<typeof Themeisle309> = { title: "Themeisle/Themeisle309", component: Themeisle309 };

export default meta;
type Story = StoryObj<typeof Themeisle309>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
