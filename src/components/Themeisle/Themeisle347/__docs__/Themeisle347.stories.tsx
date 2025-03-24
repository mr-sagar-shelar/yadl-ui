import type { Meta, StoryObj } from "@storybook/react";
import Themeisle347 from "../Themeisle347";

const meta: Meta<typeof Themeisle347> = { title: "Themeisle/Themeisle347", component: Themeisle347 };

export default meta;
type Story = StoryObj<typeof Themeisle347>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
