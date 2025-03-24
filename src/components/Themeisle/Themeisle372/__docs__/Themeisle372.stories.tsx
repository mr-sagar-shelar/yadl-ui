import type { Meta, StoryObj } from "@storybook/react";
import Themeisle372 from "../Themeisle372";

const meta: Meta<typeof Themeisle372> = { title: "Themeisle/Themeisle372", component: Themeisle372 };

export default meta;
type Story = StoryObj<typeof Themeisle372>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
