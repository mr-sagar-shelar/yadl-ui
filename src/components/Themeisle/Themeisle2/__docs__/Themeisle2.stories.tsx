import type { Meta, StoryObj } from "@storybook/react";
import Themeisle2 from "../Themeisle2";

const meta: Meta<typeof Themeisle2> = { title: "Themeisle/Themeisle2", component: Themeisle2 };

export default meta;
type Story = StoryObj<typeof Themeisle2>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
