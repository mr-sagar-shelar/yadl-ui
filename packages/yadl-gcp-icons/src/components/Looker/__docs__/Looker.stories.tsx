import type { Meta, StoryObj } from "@storybook/react";
import Looker from "../Looker";

const meta: Meta<typeof Looker> = { title: "GCP/Looker", component: Looker };

export default meta;
type Story = StoryObj<typeof Looker>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
