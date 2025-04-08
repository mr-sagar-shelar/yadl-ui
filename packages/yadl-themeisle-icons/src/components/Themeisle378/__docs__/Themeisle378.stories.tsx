import type { Meta, StoryObj } from "@storybook/react";
import Themeisle378 from "../Themeisle378";

const meta: Meta<typeof Themeisle378> = { title: "Themeisle/Themeisle378", component: Themeisle378 };

export default meta;
type Story = StoryObj<typeof Themeisle378>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
