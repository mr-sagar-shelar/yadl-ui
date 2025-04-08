import type { Meta, StoryObj } from "@storybook/react";
import Themeisle144 from "../Themeisle144";

const meta: Meta<typeof Themeisle144> = { title: "Themeisle/Themeisle144", component: Themeisle144 };

export default meta;
type Story = StoryObj<typeof Themeisle144>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
