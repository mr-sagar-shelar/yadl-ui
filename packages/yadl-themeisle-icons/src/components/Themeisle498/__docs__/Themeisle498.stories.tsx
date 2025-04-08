import type { Meta, StoryObj } from "@storybook/react";
import Themeisle498 from "../Themeisle498";

const meta: Meta<typeof Themeisle498> = { title: "Themeisle/Themeisle498", component: Themeisle498 };

export default meta;
type Story = StoryObj<typeof Themeisle498>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
