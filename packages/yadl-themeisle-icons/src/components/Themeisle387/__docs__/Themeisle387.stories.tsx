import type { Meta, StoryObj } from "@storybook/react";
import Themeisle387 from "../Themeisle387";

const meta: Meta<typeof Themeisle387> = { title: "Themeisle/Themeisle387", component: Themeisle387 };

export default meta;
type Story = StoryObj<typeof Themeisle387>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
