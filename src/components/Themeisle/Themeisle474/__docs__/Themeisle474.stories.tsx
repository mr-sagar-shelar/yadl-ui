import type { Meta, StoryObj } from "@storybook/react";
import Themeisle474 from "../Themeisle474";

const meta: Meta<typeof Themeisle474> = { title: "Themeisle/Themeisle474", component: Themeisle474 };

export default meta;
type Story = StoryObj<typeof Themeisle474>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
