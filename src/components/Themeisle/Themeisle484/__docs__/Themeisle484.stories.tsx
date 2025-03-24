import type { Meta, StoryObj } from "@storybook/react";
import Themeisle484 from "../Themeisle484";

const meta: Meta<typeof Themeisle484> = { title: "Themeisle/Themeisle484", component: Themeisle484 };

export default meta;
type Story = StoryObj<typeof Themeisle484>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
