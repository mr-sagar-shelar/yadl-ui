import type { Meta, StoryObj } from "@storybook/react";
import Themeisle400 from "../Themeisle400";

const meta: Meta<typeof Themeisle400> = { title: "Themeisle/Themeisle400", component: Themeisle400 };

export default meta;
type Story = StoryObj<typeof Themeisle400>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
