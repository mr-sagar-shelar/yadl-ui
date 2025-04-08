import type { Meta, StoryObj } from "@storybook/react";
import Themeisle200 from "../Themeisle200";

const meta: Meta<typeof Themeisle200> = { title: "Themeisle/Themeisle200", component: Themeisle200 };

export default meta;
type Story = StoryObj<typeof Themeisle200>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
