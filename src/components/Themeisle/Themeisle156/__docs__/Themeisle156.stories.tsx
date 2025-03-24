import type { Meta, StoryObj } from "@storybook/react";
import Themeisle156 from "../Themeisle156";

const meta: Meta<typeof Themeisle156> = { title: "Themeisle/Themeisle156", component: Themeisle156 };

export default meta;
type Story = StoryObj<typeof Themeisle156>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
