import type { Meta, StoryObj } from "@storybook/react";
import Themeisle427 from "../Themeisle427";

const meta: Meta<typeof Themeisle427> = { title: "Themeisle/Themeisle427", component: Themeisle427 };

export default meta;
type Story = StoryObj<typeof Themeisle427>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
