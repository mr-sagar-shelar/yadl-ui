import type { Meta, StoryObj } from "@storybook/react";
import Themeisle66 from "../Themeisle66";

const meta: Meta<typeof Themeisle66> = { title: "Themeisle/Themeisle66", component: Themeisle66 };

export default meta;
type Story = StoryObj<typeof Themeisle66>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
