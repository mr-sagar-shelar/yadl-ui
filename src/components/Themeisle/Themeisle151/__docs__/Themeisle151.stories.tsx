import type { Meta, StoryObj } from "@storybook/react";
import Themeisle151 from "../Themeisle151";

const meta: Meta<typeof Themeisle151> = { title: "Themeisle/Themeisle151", component: Themeisle151 };

export default meta;
type Story = StoryObj<typeof Themeisle151>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
