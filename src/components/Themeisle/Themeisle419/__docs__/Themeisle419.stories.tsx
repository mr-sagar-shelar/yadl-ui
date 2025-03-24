import type { Meta, StoryObj } from "@storybook/react";
import Themeisle419 from "../Themeisle419";

const meta: Meta<typeof Themeisle419> = { title: "Themeisle/Themeisle419", component: Themeisle419 };

export default meta;
type Story = StoryObj<typeof Themeisle419>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
