import type { Meta, StoryObj } from "@storybook/react";
import Themeisle429 from "../Themeisle429";

const meta: Meta<typeof Themeisle429> = { title: "Themeisle/Themeisle429", component: Themeisle429 };

export default meta;
type Story = StoryObj<typeof Themeisle429>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
