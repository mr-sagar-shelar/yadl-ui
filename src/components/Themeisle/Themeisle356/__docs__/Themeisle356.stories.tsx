import type { Meta, StoryObj } from "@storybook/react";
import Themeisle356 from "../Themeisle356";

const meta: Meta<typeof Themeisle356> = { title: "Themeisle/Themeisle356", component: Themeisle356 };

export default meta;
type Story = StoryObj<typeof Themeisle356>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
