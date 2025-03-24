import type { Meta, StoryObj } from "@storybook/react";
import Themeisle208 from "../Themeisle208";

const meta: Meta<typeof Themeisle208> = { title: "Themeisle/Themeisle208", component: Themeisle208 };

export default meta;
type Story = StoryObj<typeof Themeisle208>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
