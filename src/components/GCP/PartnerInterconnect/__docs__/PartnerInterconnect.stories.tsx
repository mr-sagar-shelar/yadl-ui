import type { Meta, StoryObj } from "@storybook/react";
import PartnerInterconnect from "../PartnerInterconnect";

const meta: Meta<typeof PartnerInterconnect> = { title: "GCP/PartnerInterconnect", component: PartnerInterconnect };

export default meta;
type Story = StoryObj<typeof PartnerInterconnect>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
