import type { Meta, StoryObj } from "@storybook/react";
import Themeisle369 from "../Themeisle369";

const meta: Meta<typeof Themeisle369> = { title: "Themeisle/Themeisle369", component: Themeisle369 };

export default meta;
type Story = StoryObj<typeof Themeisle369>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
