import type { Meta, StoryObj } from "@storybook/react";
import Themeisle164 from "../Themeisle164";

const meta: Meta<typeof Themeisle164> = { title: "Themeisle/Themeisle164", component: Themeisle164 };

export default meta;
type Story = StoryObj<typeof Themeisle164>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
