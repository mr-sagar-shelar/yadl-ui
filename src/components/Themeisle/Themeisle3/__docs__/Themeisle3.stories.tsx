import type { Meta, StoryObj } from "@storybook/react";
import Themeisle3 from "../Themeisle3";

const meta: Meta<typeof Themeisle3> = { title: "Themeisle/Themeisle3", component: Themeisle3 };

export default meta;
type Story = StoryObj<typeof Themeisle3>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
