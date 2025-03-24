import type { Meta, StoryObj } from "@storybook/react";
import Themeisle163 from "../Themeisle163";

const meta: Meta<typeof Themeisle163> = { title: "Themeisle/Themeisle163", component: Themeisle163 };

export default meta;
type Story = StoryObj<typeof Themeisle163>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
