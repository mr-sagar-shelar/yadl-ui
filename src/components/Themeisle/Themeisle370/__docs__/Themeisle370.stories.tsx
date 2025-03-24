import type { Meta, StoryObj } from "@storybook/react";
import Themeisle370 from "../Themeisle370";

const meta: Meta<typeof Themeisle370> = { title: "Themeisle/Themeisle370", component: Themeisle370 };

export default meta;
type Story = StoryObj<typeof Themeisle370>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
