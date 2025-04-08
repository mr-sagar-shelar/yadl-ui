import type { Meta, StoryObj } from "@storybook/react";
import Themeisle227 from "../Themeisle227";

const meta: Meta<typeof Themeisle227> = { title: "Themeisle/Themeisle227", component: Themeisle227 };

export default meta;
type Story = StoryObj<typeof Themeisle227>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
