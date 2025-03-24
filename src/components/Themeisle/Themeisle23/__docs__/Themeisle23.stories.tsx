import type { Meta, StoryObj } from "@storybook/react";
import Themeisle23 from "../Themeisle23";

const meta: Meta<typeof Themeisle23> = { title: "Themeisle/Themeisle23", component: Themeisle23 };

export default meta;
type Story = StoryObj<typeof Themeisle23>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
