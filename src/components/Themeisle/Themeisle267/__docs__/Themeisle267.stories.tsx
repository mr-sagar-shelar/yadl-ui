import type { Meta, StoryObj } from "@storybook/react";
import Themeisle267 from "../Themeisle267";

const meta: Meta<typeof Themeisle267> = { title: "Themeisle/Themeisle267", component: Themeisle267 };

export default meta;
type Story = StoryObj<typeof Themeisle267>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
