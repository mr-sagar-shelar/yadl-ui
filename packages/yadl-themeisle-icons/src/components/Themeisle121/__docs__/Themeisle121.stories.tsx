import type { Meta, StoryObj } from "@storybook/react";
import Themeisle121 from "../Themeisle121";

const meta: Meta<typeof Themeisle121> = { title: "Themeisle/Themeisle121", component: Themeisle121 };

export default meta;
type Story = StoryObj<typeof Themeisle121>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
