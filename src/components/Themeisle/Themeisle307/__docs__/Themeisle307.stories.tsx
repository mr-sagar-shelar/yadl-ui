import type { Meta, StoryObj } from "@storybook/react";
import Themeisle307 from "../Themeisle307";

const meta: Meta<typeof Themeisle307> = { title: "Themeisle/Themeisle307", component: Themeisle307 };

export default meta;
type Story = StoryObj<typeof Themeisle307>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
