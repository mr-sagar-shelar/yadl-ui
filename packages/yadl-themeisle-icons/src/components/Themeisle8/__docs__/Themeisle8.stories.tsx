import type { Meta, StoryObj } from "@storybook/react";
import Themeisle8 from "../Themeisle8";

const meta: Meta<typeof Themeisle8> = { title: "Themeisle/Themeisle8", component: Themeisle8 };

export default meta;
type Story = StoryObj<typeof Themeisle8>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
